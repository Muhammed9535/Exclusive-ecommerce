import SectionHeader from "../SectionHeader/SectionHeader";
import { categories } from "../../assets/index.js";

function Category() {
    return (
        <div className="category">
            <SectionHeader text="categories" category="Browse By Category" />
            <div className="category-section d-flex justify-content-between mt-4">
                {categories.map((item, index) => {
                    return (
                        <div key={index} className="category-img px-5 py-2 border">
                            <img src={item.img} alt="" />
                            <p className="mt-1" style={{ fontSize: "10px" }}>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category;