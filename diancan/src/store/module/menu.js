const state = {
	menuItems: {}	// 菜单 品种
}

// 获取属性的状态
const getters = {
	getMenuItems(state) {
		return state.menuItems
	}
}

// 改变属性的状态
const mutations = {
	setMenuItems (state, data) {
		// 添加菜单 品种
		state.menuItems = data
	},
	removeMenuItems (state, data) {
		// 将匹配到的对象，在 menuItems 数组中删除
		state.menuItems.forEach((item, index) => {
			if (item == data) {
				state.menuItems.splice(index, 1)
			}
		})
	},
	pushToMenuItems (state, data) {
		// 将新添加的 Pizza push到 menuItems 中
		state.menuItems.push(data)
	}
}

const actions = {

}

export default {
	state,
	getters,
	mutations,
	actions
}