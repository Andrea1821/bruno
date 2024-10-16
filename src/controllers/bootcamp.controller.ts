import { Controller,Delete,Get, Param, Post,Put} from '@nestjs/common';
import { get } from 'http';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getAllBootcamps(): string{
        return"aqui se mostraran todos los bootcamps"
    }
    @Get(":id")
    gerBootcampById(@Param("id") id:string): string{
        return `aqui se va a mostrar el bootcamp con id ${id}`
    }

    @Post()
    createBootcamp(): String{
        return"aqui se van a crear bootcamp";
    }
    @Put(":id")
    updateBootcamp(@Param("id") id:string) :string{
        return`Aqui se va a actualizar el bootcamp:${id}`
    }
    @Delete(":id")
    DeleteBootcamp(@Param('id')id:string) : string {
        return`Aqui se va a eliminar el bootcamp:${id}`
    }
 
}
