import DashboardAnggotaController from './DashboardAnggotaController'
import BookLoanController from './BookLoanController'
import MyrequestController from './MyrequestController'
import LoanListController from './LoanListController'
import OverduesController from './OverduesController'
import LoanHistoryController from './LoanHistoryController'
const Anggota = {
    DashboardAnggotaController: Object.assign(DashboardAnggotaController, DashboardAnggotaController),
BookLoanController: Object.assign(BookLoanController, BookLoanController),
MyrequestController: Object.assign(MyrequestController, MyrequestController),
LoanListController: Object.assign(LoanListController, LoanListController),
OverduesController: Object.assign(OverduesController, OverduesController),
LoanHistoryController: Object.assign(LoanHistoryController, LoanHistoryController),
}

export default Anggota