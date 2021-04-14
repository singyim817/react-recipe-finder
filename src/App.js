import logo from './logo.svg';
import './App.css';
import SearchRecipes from './components/ResearchRecipes'
import RecipeList from './components/RecipeList'
import './styles/index.css'
// import FavouriteRecipeList from './components/FavouriteRecipeList';

function App() {
  return (
    <div>
      <h2>Recipe Finder</h2>
      <SearchRecipes />
      <RecipeList />
      {/* <FavouriteRecipeList /> */}
    </div>
  );
}

export default App;
