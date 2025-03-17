import SectionHeader from "../SectionHeader/SectionHeader";
import './Category.css'
import { categories } from '../../assets'

function Category() {
    return (
        <div className="category">
            <SectionHeader text="categories" category="Browse By Category" />
            <div className="category-section d-flex justify-content-between mt-4">
                {categories.map((item, index) => {
                    return (
                        <div key={index} className="category-img border">
                            <div>
                                <img src={item.img} alt="" />
                                <p className="mt-1" style={{ fontSize: "10px" }}>{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category;