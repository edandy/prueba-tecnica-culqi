import {LocationQueryValue} from "vue-router";

export interface IFormLogin {
  correo: string
  password: string
}

export interface IFilters{
  limit: number|string|LocationQueryValue[];
  page: number|string|LocationQueryValue[];
}


export interface IMessage {
  message: string;
  status: string;
}

export interface IErrors {
  errors: IMessage|string;
}

export interface IUser {
  id: number;
  nombre: string;
  correo: string;
  cardo: string;
  departamento: string;
  oficina: string;
  estadoCuenta: string;
}

export interface IAuth {
  user: IUser;
  loggedIn: boolean;
}

export interface IQuery {
  limit?: number;
  page?: number;
}
