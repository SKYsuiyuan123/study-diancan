const state = {
	currentUser: null	// 用户名
}

const getters = {
	currentUser (state) {
		return state.currentUser
	}
}

const mutations = {
	userStatus (state, user) {
		// 更改用户信息
		if (user) {
			state.currentUser = user
			state.isLogin = true
		} else {
			state.currentUser = null
			state.isLogin = false
		}
	}
}

// 应用 mutations
const actions = {
	setUser ({commit}, user) {
		commit('userStatus', user)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}