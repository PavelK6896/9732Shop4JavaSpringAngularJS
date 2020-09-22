package app.web.pavelk.shop4.service;


import app.web.pavelk.shop4.model.Product;
import app.web.pavelk.shop4.repo.ProductsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProductsService {
    private ProductsRepository productsRepository;

    @Autowired
    public void setProductsRepository(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }



    public List<Product> findAll() {
        return productsRepository.findAll();
    }
}
