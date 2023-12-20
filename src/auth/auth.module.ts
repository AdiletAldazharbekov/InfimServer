import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTCONSTANTS } from './constants';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWTCONSTANTS.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
