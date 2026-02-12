import DashboardPetugasController from './DashboardPetugasController'
import LoanRequestController from './LoanRequestController'
import LoanStatusController from './LoanStatusController'
const Petugas = {
    DashboardPetugasController: Object.assign(DashboardPetugasController, DashboardPetugasController),
LoanRequestController: Object.assign(LoanRequestController, LoanRequestController),
LoanStatusController: Object.assign(LoanStatusController, LoanStatusController),
}

export default Petugas