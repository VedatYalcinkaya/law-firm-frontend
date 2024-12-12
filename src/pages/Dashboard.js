import backgroundImage from "../assets/images/backgroundImage.jpg";
import { Routes, Route } from "react-router-dom";
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
import ManageArticles from "./AdminPages/ManageArticle";
import EditArticlePage from "./EditArticlePage";
import NotFoundPage from "./NotFoundPage";
import AddLegalContentPage from "./AddLegalContentPage";
import LegalContentDetailsPage from "./LegalContentDetailsPage";
import EditLegalContentPage from "./EditLegalContentPage";



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
                    <Route path="hakkimizda" element={<AboutUsPage/>} /> 
                    <Route path="/icra-hukuku" element={<IcraHukukuPage/>} />
                    <Route path="/ceza-hukuku" element={<CezaHukukuPage/>} />
                    <Route path="/makaleler" element={<ArticlesPage/>} />
                    <Route path="/admin/publish-article" element={<PublishingArticlePage/>} />
                    <Route path="/admin/calisma-alani-ekle" element={<AddLegalContentPage/>} />
                    <Route path="admin/manage-articles" element={<ManageArticles/>}/>
                    <Route path="/admin/edit-article/:id" element={<EditArticlePage />} /> 
                    <Route path="/admin/calisma-alani-duzenle/:id" element={<EditLegalContentPage />} /> 

                    <Route path="/makale/:id" element={<ArticleDetailsPage />} />
                    <Route path="/calisma-alani/:id" element={<LegalContentDetailsPage />} />
                    <Route path="/iletisim" element={<ContactPage />} />
                    {/* 404 Sayfası */}
        <           Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;
