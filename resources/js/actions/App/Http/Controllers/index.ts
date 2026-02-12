import PreviewController from './PreviewController'
import SelectCategory from './SelectCategory'
import Admin from './Admin'
import Anggota from './Anggota'
import Petugas from './Petugas'
import Settings from './Settings'
const Controllers = {
    PreviewController: Object.assign(PreviewController, PreviewController),
SelectCategory: Object.assign(SelectCategory, SelectCategory),
Admin: Object.assign(Admin, Admin),
Anggota: Object.assign(Anggota, Anggota),
Petugas: Object.assign(Petugas, Petugas),
Settings: Object.assign(Settings, Settings),
}

export default Controllers