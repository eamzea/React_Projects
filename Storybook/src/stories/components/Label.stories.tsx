import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../../components/Label";

export default {
	title: 'UI/Input/Label',
	component: Label,
	argTypes: {
		variant: {control: 'select'}
	}
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}/>

export const Basic = Template.bind({});
Basic.args = {
	size: 'normal'
}

export const Caps = Template.bind({});
export const Secondary = Template.bind({});