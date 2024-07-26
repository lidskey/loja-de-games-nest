import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { Module } from "@nestjs/common";
import { ProdutoService } from "./services/produto.service";
import { ProdutoController } from "./controllers/produto.controller";
import { CategoriaService } from "../categoria/services/categoria.service";
import { Categoria } from "../categoria/entities/categoria.entity";



@Module({

    imports: [TypeOrmModule.forFeature([Produto, Categoria])],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]

})

export class ProdutoModule { }