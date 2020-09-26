package app.web.pavelk.shop4.controller;

import app.web.pavelk.shop4.model.Product;
import app.web.pavelk.shop4.service.ProductsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/products")
@Api("Set of endpoints for CRUD operations for Products")
@AllArgsConstructor
public class ProductsController {
    private final ProductsService productsService;

    @GetMapping(produces = "application/json")
    @ApiOperation("find all product")
    public List<Product> getAllProducts() {
        return productsService.findAll();
    }


    @GetMapping(value = "/{page}", produces = "application/json")
    @ApiOperation("all product to page")
    public Page<Product> getProductsToPage(@PathVariable Integer page) {
        return productsService.findPage(page);
    }


}
