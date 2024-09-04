
 import { lazy } from "react";
const Dashboard = lazy(()=>import("../Pages/Dashboard/Dashboard.jsx"));
const Amazon = lazy(()=>import("../Pages/Amazon/Amazon.jsx"));
const Netflix=lazy(()=>import("../Pages/Netflix/Netflix.jsx"));
const Article=lazy(()=>import("../Pages/Article/Article.jsx"));


export  {Dashboard,Amazon,Netflix,Article}