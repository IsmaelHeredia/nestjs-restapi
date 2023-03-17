import { Injectable, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthAdminGuard extends AuthGuard('jwt') {

    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
      }
    
      handleRequest(err, user, info) {
        //console.log(user);
        if (err || !user || user.tipo != "administrador") {
          throw err || new UnauthorizedException("Acceso solo para administradores");
        }
        return user;
      }

}