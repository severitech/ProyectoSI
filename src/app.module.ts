import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { Producto } from './productos/entities/producto.entity';
import { Categoria } from './categorias/entities/categoria.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module'
import { ClienteModule } from './cliente/cliente.module';
import { VentaModule } from './venta/venta.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'TIENDA_SI1',
      autoLoadEntities: true,
      synchronize: false,
      entities: [Producto, Categoria],
    }),
    ProductosModule,
    CategoriasModule,
    UsersModule,
    AuthModule,
    ClienteModule,
    VentaModule,
  ],
  controllers: [],
})
export class AppModule {}
