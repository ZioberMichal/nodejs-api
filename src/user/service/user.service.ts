import {Injectable} from '@nestjs/common';
import {TokenPayload} from '../dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
    private jwtSecret = 'secret';

    tokenSign(payload: TokenPayload) {
        return jwt.sign(payload, this.jwtSecret);
    }

    tokenDecode(token: string): TokenPayload {
        return jwt.decode(token) as TokenPayload;
    }
}
