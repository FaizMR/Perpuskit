import UserController from './UserController'
import DashboardAdminController from './DashboardAdminController'
import LoanExtensionRequestController from './LoanExtensionRequestController'
import ReturnBookController from './ReturnBookController'
import LoanPaymentController from './LoanPaymentController'
import CategoryController from './CategoryController'
import BookController from './BookController'
const Admin = {
    UserController: Object.assign(UserController, UserController),
DashboardAdminController: Object.assign(DashboardAdminController, DashboardAdminController),
LoanExtensionRequestController: Object.assign(LoanExtensionRequestController, LoanExtensionRequestController),
ReturnBookController: Object.assign(ReturnBookController, ReturnBookController),
LoanPaymentController: Object.assign(LoanPaymentController, LoanPaymentController),
CategoryController: Object.assign(CategoryController, CategoryController),
BookController: Object.assign(BookController, BookController),
}

export default Admin