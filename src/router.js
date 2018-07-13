import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from './pages/book/book-list'
import BookItem from './pages/book/book-item'
import BookOrder from './pages/book/book-order'
import PaySuccess from './pages/book/pay-success'
import CourseMain from './pages/course/course-main'
import Exam from './pages/exam/exam-category'
import ExamList from './pages/exam/exam-list'
import ExamGuide from './pages/exam/exam-guide'
import ExamCourse from './pages/exam/exam-course'
import ExamCourseList from './pages/exam/exam-course-list'
import ExamExamination from './pages/exam/exam-examination'
import Reader from './pages/reader/reader'
import Category from './pages/book/category'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/exam'},
    {path: '/book', component: BookList},
    {path: '/book/:id', component: BookItem},
    {path: '/book/:id/order', component: BookOrder},
    {path: '/book/:id/order/pay-success', component: PaySuccess, name: 'pay-success'},
    {path: '/course', component: CourseMain},
    {path: '/exam', component: Exam},
    {path: '/exam/:eid', component: ExamList},
    {path: '/exam/:eid/guide', component: ExamGuide},
    {path: '/exam/:eid/course', component: ExamCourse},
    {path: '/exam/:eid/course/:cid', component: ExamCourseList},
    {path: '/exam/:eid/examination', component: ExamExamination},
    {path: '/exam/:eid/pdf/:cid', component: ExamPDFCategory},
    {path: '/exam/:eid/pdf/:cid/item/:iid', component: Reader},
    {path: '/test', component: Category},
]

export default new VueRouter({
    routes
})
