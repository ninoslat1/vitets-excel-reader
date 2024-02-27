import {Sequelize} from 'sequelize'
import { IConnectionForm } from "@/type";
import { toast } from 'react-toastify';

export const connectToDatabase = async ({server, user, password, port, database}:IConnectionForm) => {
    const sequelize = new Sequelize(database, user, password, {
        host: server,
        dialect: 'mariadb',
        port: parseInt(port),
        dialectOptions: {
            pg: false
        }
    })
    
    try {
        await sequelize.authenticate()
        toast.success("Koneksi berhasil")
    }
    catch (e: unknown) {
        if (typeof e === "string"){
            toast.error(e.toUpperCase())
        } else if (e instanceof Error){
            toast.error(e.message)
        }
    }
}