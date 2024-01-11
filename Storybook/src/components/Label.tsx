export interface Props {
	/**
	 * Label for the component
	 */
	label: string;
	/**
	 * Size for the label component
	 */
	size: 'normal' | 'h1' | 'h2' | 'h3'
	/**
	 * Color variant
	 */
	variant: 'primary' | 'secondary' | 'tertiary';
	/**
	 * Letters capitalized
	 */
	capitalized: boolean
}

const Label:React.FC<Props> = ({label = 'No Label', size='normal'}) => {
	return (
		<span>{label}</span>
	)
}

export default Label