export default {
    fetchLocalData: async (source: string): Promise<any> => {
        try{
            const json = await fetch(`/data/${ source }.json`);
            const res = await json.json();
            return res;
        }catch(e){
            if(e instanceof Error) throw e
            else throw 'Hubo un error';
        }
    }
}