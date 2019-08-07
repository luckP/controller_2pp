import { Employee } from './employee';
import { FactoryMachine } from './factory_machine';
import { MaterialColor } from './materialColor';
import { MaterialType } from './materialType';

export class Bag{
    id:number;
    num_bag:number;
    start_time:any;
    end_time:any;
    mp_lot:string;
    bag_weight:number;
    total_weight:number;
    quantity_produced:number;
    employee:Employee;
    factory_machine: FactoryMachine;
    material_color: MaterialColor;
    material_type: MaterialType;
    note: string;
}