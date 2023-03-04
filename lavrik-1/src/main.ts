type BaseWeapon = {
	damage: number,
	range: number,
}

type WeaponMele = BaseWeapon & {
	wear: number,
	arrows?: never
}

type WeaponArcher = BaseWeapon & {
	wear?: never,
	arrows: number
}

type Weapon = WeaponMele | WeaponArcher;

type Shield = null | {
	size: number,
	resistance: number
}

type Unit = {
	health: number,
	armor: number,
	weapon: Weapon,
	shield: Shield

}

type TGroup = {
	units: Unit[]
}

let result: TGroup = {
	units: [
		{
			health: 100,
			armor: 5,
			weapon: {
				damage: 5,
				range: 1,
				wear: 0,
			},
			shield: { size: 10, resistance: 5 },
		},
		{
			health: 100,
			armor: 5,
			weapon: {
				damage: 5,
				range: 1,
				wear: 0,
			},
			shield: null,
		},
		{
			health: 100,
			armor: 5,
			weapon: {
				damage: 2,
				range: 10,
				arrows: 40,
			},
			shield: null,
		},
	]
}