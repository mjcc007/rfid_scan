export default class NavigationUtil {
  /**
   * 重置到首页
   * @param navigation
   */
  static resetToHomePage(parmas) {
    const {navigation} = parmas;
    navigation.navigate('Main');
  }
  /**
   * 返回上一页
   * @param params
   */
  static back(parmas) {
    const {navigation} = parmas;
    navigation.goBack();
  }
}
