import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmAsyncConfig } from './config/typeorm.config'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env'
      // envFilePath: '.production.env',
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule
  ]
})
export class AppModule {}
