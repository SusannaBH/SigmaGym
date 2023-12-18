import { useNavigate } from 'react-router-dom';
import Style from './stylesPlanFree.module.css';
import IconGym from './IconGym';

interface Props { }

const PlanFree: React.FC<Props> = () => {

	const navigate = useNavigate();

	const handleNavigateToPlans = () => {
		navigate('/plans');
	};

	return (
		<div className={Style.container}>
			<IconGym />
			<p className={Style.message}>
				DATE PRISA EN CONTRATAR UN NUEVO PLAN Y PODER DISFRUTAR DE TODAS LAS VENTAJAS QUE TE OFRECE 'SYGMA GYM'.
				En él, podrás visualizar las novedades de los gimnasios y también podrás gestionar tus propias clases en cada uno de ellos.
				¿A qué esperas? ¡Apúntate ya!
			</p>
			<button className={Style.buttonPlanFree} onClick={handleNavigateToPlans}>ELEGIR UN PLAN</button>
		</div>
	);
};

export default PlanFree;