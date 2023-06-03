import { React, lazy, Suspense } from 'react';
import { Navigate, Routes, useRoutes } from "react-router-dom";
import PageLoading from '../components/PageLoading';




const Explore = lazy(()=> import('./MeanExplore'));
const SidebarNavbar = lazy(()=> import('../Routes/SideBarNavbar'))
const HomeMean = lazy (()=> import ('./HomeMain'))
const Notification = lazy (()=> import ('../page/Notifications'))
const Message = lazy (()=> import ('../page/Message'))
const Bookmarks = lazy (()=>import ('../page/Bookmark'))
const Create = lazy (()=> import ('../components/Create'))

function Router (){
    let router =useRoutes([
        {
            element:<Suspense fallback={<PageLoading/>}><SidebarNavbar/></Suspense>,
            children:[
                {
                    element:<Suspense fallback={<PageLoading/>}><HomeMean/></Suspense>,
                    path:'/home'
                },
                {
                    element:<Suspense fallback={<PageLoading/>}><Explore/></Suspense>,
                    path:'/explore'
                },
                {
                    element:<Suspense fallback={<PageLoading/>}><Notification/></Suspense>,
                    path:'/notification'
                }
                ,
                {
                    element:<Suspense fallback={<PageLoading/>}><Message/></Suspense>,
                    path:'/message'
                },
                {
                    element:<Suspense fallback={<PageLoading/>}><Bookmarks/></Suspense>,
                    path:'/bookmark'
                }
            ]
        },
        {
            element:<Navigate to='/home'/>,
            path:'*'
        },
        {
            element:<Suspense fallback={<PageLoading/>}><Create/></Suspense>,
            path:'/Create'
        }
    ]);
    return router
}


export default Router;