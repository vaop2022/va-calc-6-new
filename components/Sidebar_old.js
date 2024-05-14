import React, { useState } from 'react'
import {
	Flex,
	Link,
	Text,
	IconButton,
	Divider,
	Avatar,
	Heading
} from '@chakra-ui/react'
import {
	FiMenu,
	FiHome,
	FiCalendar,
	FiUser,
	FiDollarSign,
	FiBriefcase,
	FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'
import CalcBase10 from './calculators/CalcBase10'

export default function Sidebar() {
	const [navSize, changeNavSize] = useState('large')
	const [isCalcBase10Open, setCalcBase10Open] = useState(false)
	// const [isCalculatorSubMenu2Open, setCalculatorSubMenu2Open] =
	// 	useState(false)

	const toggleCalcBase10 = () => {
		setCalcBase10Open(!isCalcBase10Open)
	}

	return (
		<Flex
			pos='sticky'
			left='5'
			h='95vh'
			marginTop='2.5vh'
			boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
			borderRadius={navSize == 'small' ? '15px' : '30px'}
			w={navSize == 'small' ? '75px' : '200px'}
			flexDir='column'
			justifyContent='space-between'
		>
			<Flex
				p='5%'
				flexDir='column'
				w='100%'
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				as='nav'
			>
				<IconButton
					background='none'
					mt={5}
					_hover={{ background: 'none' }}
					icon={<FiMenu />}
					onClick={() => {
						if (navSize == 'small') changeNavSize('large')
						else changeNavSize('small')
					}}
				/>
				<NavItem
					navSize={navSize}
					icon={FiHome}
					title='Info'
					description='This is the description for the dashboard.'
					active
				/>
				<NavItem navSize={navSize} icon={FiBriefcase} title='Calculators' />
				<Link href='/calculator10'>Decimal calculator</Link>
				<Link href='/calculator2'>Binary calculator</Link>
				<NavItem navSize={navSize} icon={FiSettings} title='About' />
			</Flex>

			<Flex
				p='5%'
				flexDir='column'
				w='100%'
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				mb={4}
			>
				<Divider display={navSize == 'small' ? 'none' : 'flex'} />
				<Flex mt={4} align='center'>
					<Avatar size='sm' src='avatar-1.jpg' />
					<Flex
						flexDir='column'
						ml={4}
						display={navSize == 'small' ? 'none' : 'flex'}
					>
						<Heading as='h3' size='sm'>
							Yuliia Pavliuk
						</Heading>
						<Text color='gray'>User</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
