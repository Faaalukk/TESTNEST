import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {UserService} from '../user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private userService : UserService){}
  async validateUser(email:string , password:string) :Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && await bcrypt.compare(password,user.password)){
      const result = user.toObject();
      console.log(result)
      return {
        email : result.email,
        userId : result._id
      };
    }
    //dsdasdsa
    return null;
  }
}
