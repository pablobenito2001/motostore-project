import { Ref } from 'vue'

export interface ResponseAPI<T>{
    data: Ref<T>;
    error: Ref<Error>;
    loading: Ref<boolean>;
    fetching: Function;
}