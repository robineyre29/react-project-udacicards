import { AsyncStorage, Platform } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'udacicards:notification'

/* These functions are based on the code samples
   available at https://docs.expo.io/versions/latest/sdk/notifications.html */
export async function getNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

export async function listenForNotifications() {
   Notifications.addListener(notification => {
     if (notification.origin === 'received' && Platform.OS === 'ios') {
       console.log('Received notification')
     }
   });
 };

/* These functions are based on the code from the course */
function createNotification () {
  return {
    title: 'Practice your skills!',
    body: "👋 don't forget to take a quiz today!",
    ios: {
      sound: true,
    },
  }
}

export async function setLocalNotification() {
  try {
    let notification = await AsyncStorage.getItem(NOTIFICATION_KEY)
    if (notification === null) {
      let tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(20)
      tomorrow.setMinutes(0)
      await Notifications.cancelAllScheduledNotificationsAsync()
      await Notifications.scheduleLocalNotificationAsync(
        createNotification(),
        {
          time: tomorrow,
          repeat: 'day',
        }
      )
      await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
  catch (error) {
    console.log(error)
  }
}

export async function clearLocalNotification () {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_KEY)
    await Notifications.cancelAllScheduledNotificationsAsync()
  }
  catch (error) {
    console.log(error)
  }
}
