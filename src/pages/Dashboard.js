import backgroundImage from "../assets/images/backgroundImage.jpg";
import { Routes, Route } from "react-router-dom";
// import StickyNavbar from "../components/StickyNavbar";
import Navbar2 from "../components/Navbar2";
import HomePage from "./HomePage";
import Footer from "../components/Footer";
import AboutUsPage from "./AboutUsPage";
import ContactPage from "./ContactPage";
import IcraHukukuPage from "./IcraHukukuPage";
import CezaHukukuPage from "./CezaHukukuPage";
import PublishingArticlePage from "./PublishingArticlePage";
import ArticlesPage from "./ArticlesPage";
import ArticleDetailsPage from "./ArticleDetailsPage";
import LoginPage from "./LoginPage";
import AdminDashboard from "./AdminPages/AdminDashboard";
import ManageArticles from "./AdminPages/ManageArticle";
import EditArticlePage from "./EditArticlePage";



function Dashboard() {
    return (

        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay (renk katmanı) */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* <StickyNavbar /> */}
            <Navbar2/>
            <div className="relative z-10 pt-32">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/about" element={<AboutUsPage/>} /> 
                    <Route path="/icra-hukuku" element={<IcraHukukuPage/>} />
                    <Route path="/ceza-hukuku" element={<CezaHukukuPage/>} />
                    <Route path="/makaleler" element={<ArticlesPage/>} />
                    <Route path="/admin/publish-article" element={<PublishingArticlePage/>} />
                    <Route path="admin/manage-articles" element={<ManageArticles/>}/>
                    <Route path="/admin/edit-article/:id" element={<EditArticlePage />} /> {/* Yeni Route */}
                    {/* <Route path="admin/edit-article" element={<ManageArticles/>}/> */}

                    
                    <Route path="/makale/:id" element={<ArticleDetailsPage />} />

                    {/* <Route path="/skills" element={<SkillsPage />} /> */}
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;
