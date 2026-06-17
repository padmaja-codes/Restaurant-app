import './Categorytabs.css'

const CategoryTabs = ({categories, activeCategory, setActiveCategory}) => {
  console.log(activeCategory)

  return (
    <div className="category-tabs-container">
      {categories.map(cat => (
        <button
          type="button"
          key={cat.menu_category_id}
          onClick={() => setActiveCategory(cat.menu_category_id)}
          className={`tabname ${
            activeCategory === cat.menu_category_id
              ? 'active-tab'
              : 'tab-button'
          }`}
        >
          {cat.menu_category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
