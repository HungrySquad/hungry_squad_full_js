import { useNavigate } from "react-router-dom";
import s from "./RecipeHeader.module.scss";

interface IProps {
  recipeName: string;
}

export default function RecipeHeader({ recipeName }: IProps) {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className={s.selectedRecipeHeader}>
      <button className={s.selectedRecipeBackButton} onClick={navigateBack}>
        <i className="fa-solid fa-chevron-left" />
      </button>
      <h2 className={s.selectedRecipeTitle}>{recipeName}</h2>
      <button className={s.selectedRecipeNoLike}>
        <i className="fa-regular fa-heart text-center" />
      </button>
    </div>
  );
}
