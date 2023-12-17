import Style from './styles.module.css'

interface Props {
	address?: string;
	phone?: string;
	email?: string;
}

export default function InfoGym({ address, phone, email }: Props) {

	return (
		<div className={Style.infoGym}>
			<h4>Dirección: </h4><div>{address}</div>
			<h4>Número de teléfono: </h4><div>{phone}</div>
			<h4>Correo electrónico: </h4><div>{email}</div>
		</div>
	)
}