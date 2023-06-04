export default interface SpecsProduct {
    general: { sistema_operativo: string, dimenciones: string, peso: string, sensores: string };
    camara: { trasera: string, frontal: string };
    memoria: { ram: string };
    conectividad: { bluetooth: string, wifi: string, nfc: string };
    bateria: { capacidad_de_bateria: string }
}