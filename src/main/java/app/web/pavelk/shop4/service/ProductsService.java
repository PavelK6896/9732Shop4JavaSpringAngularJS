package app.web.pavelk.shop4.service;


import app.web.pavelk.shop4.model.Product;
import app.web.pavelk.shop4.model.repo.ProductsRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductsService {
    private final ProductsRepository productsRepository;


    public List<Product> findAll() {
        return productsRepository.findAll();
    }


    public Page<Product> findPage(Integer page) {
        return productsRepository.findAll(PageRequest.of(page - 1, 2));
    }


}
