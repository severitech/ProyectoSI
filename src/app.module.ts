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
import { StripeService } from './stripe/stripe.service';
import { StripeModule } from './stripe/stripe.module';
import { StripeController } from './stripe/stripe.controller';
import { ConfigModule } from '@nestjs/config';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module';

@Module({
  imports:
    [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
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
    StripeModule,
    ConfigModule.forRoot(),
    DetalleVentaModule,
  ],
  controllers: [StripeController],
  providers: [StripeService],
})
export class AppModule { }
