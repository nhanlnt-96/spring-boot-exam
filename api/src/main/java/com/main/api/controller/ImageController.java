package com.main.api.controller;

import com.main.api.dao.ImageRepository;
import com.main.api.dto.ImageDto;
import com.main.api.entity.Image;
import com.main.api.utils.ConvertStringToSlug;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.NoResultException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/api/image")
@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
public class ImageController {
    private final ImageRepository imageRepository;

    @Autowired
    public ImageController(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @PostMapping("/upload-image")
    public ResponseEntity<ImageDto> uploadImage(@RequestParam("image") MultipartFile multipartFile) throws IOException {
        Image saveImageResponse = handleUploadImage(multipartFile);
        if (saveImageResponse != null) {
            return new ResponseEntity<>(new ImageDto(saveImageResponse.getImageId(), saveImageResponse.getImageName()), HttpStatus.CREATED);
        }
        throw new NoResultException("Create category failed.");
    }

    @GetMapping("/get-image/{imageName}")
    @ResponseBody
    public ResponseEntity<byte[]> getImage(@PathVariable String imageName) throws IOException {
        Path file = Paths.get("upload/images").resolve(imageName);
        Resource resource = new UrlResource(file.toUri());

        if (resource.exists() && resource.isReadable()) {
            return new ResponseEntity<>(FileUtils.readFileToByteArray(resource.getFile()), HttpStatus.OK);
        } else {
            throw new RuntimeException("Could not find the image");
        }
    }

    private Image handleUploadImage(MultipartFile multipartFile) throws IOException {
        String fileName = UUID.randomUUID() + "-" + ConvertStringToSlug.WHITESPACE.matcher(StringUtils.cleanPath(Objects.requireNonNull(multipartFile.getOriginalFilename()))).replaceAll("-");
        Files.copy(multipartFile.getInputStream(), Paths.get("upload/images").resolve(fileName));

        Image imageData = new Image(fileName);
        Image imageUploadResponse = imageRepository.save(imageData);

        if (imageUploadResponse.getImageId() != 0) {
            return imageUploadResponse;
        }

        return null;
    }
}