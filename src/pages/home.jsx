import MainLayout from "../layouts/main";
import { Outlet } from "react-router";
import CategoryButton from '../components/home/categoryButton';
import { useState } from "react";

function HomePage() {
    const [selectedCategory, setselectedCategory] = useState('');

    return ( 
        <div>
            <MainLayout>
                <Outlet/>
                <table className="border-collapse border border-black">
                    <tbody>
                        <tr>
                            <th className="border border-black p-10 whitespace-nowrap bg-primary-400">카테고리</th>
                            <td className="border border-black">
                                <div className="flex flex-nowrap gap-4 p-4 ">
                                    <CategoryButton 
                                        onClick={() => setselectedCategory("rice")}
                                        isSelected={selectedCategory === 'rice'}
                                    >쌀/잡곡</CategoryButton>
                                    <CategoryButton
                                        onClick={() => setselectedCategory('fruit')}
                                        isSelected={selectedCategory === 'fruit'}
                                    >과일류</CategoryButton>
                                    <CategoryButton
                                        onClick={() => setselectedCategory('vegetable')}
                                        isSelected={selectedCategory === 'vegetable'}
                                    >채소류</CategoryButton>
                                    <CategoryButton
                                        onClick={() => setselectedCategory('livestock')}
                                        isSelected={selectedCategory === 'livestock'}
                                    >축산물</CategoryButton>
                                    <CategoryButton
                                        onClick={() => setselectedCategory("marine")}
                                        isSelected={selectedCategory === 'marine'}
                                    >수산물</CategoryButton>
                                    <CategoryButton
                                        onClick={() => setselectedCategory("HoneyRedGinseng")}
                                        isSelected={selectedCategory === "HoneyRedGinseng"}
                                    >꿀/홍삼</CategoryButton>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-black p-4 whitespace-nowrap bg-primary-400">가격</th>
                            <td className="flex items-center p-4 gap-3">
                                <input className="pl-2 border border-black w-24 h-8"></input>
                                <span>-</span>
                                <input className="pl-2 border border-black w-24 h-8"></input>
                                <button className="border border-black w-14 h-8">적용</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </MainLayout>
        </div>
     );
}

export default HomePage;