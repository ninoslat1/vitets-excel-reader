import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useEffect, useState } from 'react'
import { IConnectionForm } from '@/type'
import { handleInputChange, handleSaveChanges } from '@/utils/HandleConnectionString'
import { CommitIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { connectToDatabase } from '@/utils/HandleDatabase'

export const ModalConnection = () => {
    const [value, setValue] = useState<IConnectionForm>({
        server: "",
        user: "",
        password: "",
        port: "",
        database: "",
    })

    useEffect(() => {
        const server = localStorage.getItem('server');
        const user = localStorage.getItem('user');
        const password = localStorage.getItem('password');
        const port = localStorage.getItem('port');
        const database = localStorage.getItem('database');
    
        setValue({
          server: server || "",
          user: user || "",
          password: password || "",
          port: port || "",
          database: database || "",
        });
      }, []);
      
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <Button className='my-2 hover:bg-white hover:text-slate-900 duration-300 gap-2'>Pengaturan Koneksi <CommitIcon className='w-4 h-4'/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Pengaturan Koneksi</DialogTitle>
                    <DialogDescription>
                        Buat perubahan pengaturan koneksi MySQL Anda disini
                    </DialogDescription>
                </DialogHeader>
                <DialogTitle>Koneksi Basis Data</DialogTitle>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="server" className="text-right">
                    Hostname :
                    </Label>
                    <Input id="server" className="col-span-3" value={value?.server || ""} onChange={handleInputChange("server", setValue)}/>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="user" className="text-right">
                    User :
                    </Label>
                    <Input id="user" className="col-span-3" value={value?.user || ""} onChange={handleInputChange("user", setValue)}/>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                    Password :
                    </Label>
                    <Input id="password" type='password' value={value?.password || ""} onChange={handleInputChange("password", setValue)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="port" className="text-right">
                    Port :
                    </Label>
                    <Input id="port" type='number' value={value?.port || ""} onChange={handleInputChange("port", setValue)} className="col-span-3" />
                </div>
                </div>
                <hr></hr>
                <DialogTitle>Nama Basis Data</DialogTitle>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="database" className="text-right">
                    Database :
                    </Label>
                    <Input id="database" className="col-span-3" value={value?.database || ""} onChange={handleInputChange("database", setValue)}/>
                </div>
                </div>
                <DialogFooter>
                    <Button><CommitIcon className='w-4 h-4' onClick={() => connectToDatabase(value)}/> Tes Koneksi</Button>
                    <DialogClose asChild className='items-center'>
                        <Button type="submit" onClick={():void => handleSaveChanges(value)}>Simpan  <PaperPlaneIcon className='h-4 w-4 mx-1'/></Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default ModalConnection