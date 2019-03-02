# Automation

This is a project that connects a raspberry pi board with a thermometer, hygrometer  (humidity sensor), and a light switch with Apple Home. 

Using [Homebridge](https://www.npmjs.com/package/homebridge) to interface with Apple devices and [ThingsBoard](https://github.com/thingsboard/thingsboard) to centralize, visualize, control, and store data.




## MQTT API 

The MQTT definition to interface between the raspberry pi, ThingsBoard, and HomeBridge 

### Thermometer 


##### Public telemetry 
```
mosquitto_pub -t v1/devices/me/telemetry -u "$THERMOMETER_ACCESS_TOKEN" \
-m  "{'celsius': number }"
```


###  Hygrometer 

##### Public telemetry 
```
mosquitto_pub -t v1/devices/me/telemetry -u "$HYGROMETER_ACCESS_TOKEN" \
-m  "{'percentage': number }"
```


### Light Switch

##### Public state 
```
mosquitto_pub -t v1/devices/me/attributes -u "$LIGHT_ACCESS_TOKEN" \
-m  "{'on': boolean }"
```


##### Request state 
```
mosquitto_pub -t v1/devices/me/request/$request_id -u "$LIGHT_ACCESS_TOKEN"
```

##### Request state (edge response)
```
mosquitto_pub -t v1/devices/me/response/$request_id -u "$LIGHT_ACCESS_TOKEN" \
-m  "{'on': boolean }"
```

##### Set state

```
mosquitto_pub -t v1/devices/me/rpc/request/$request_id -u "$LIGHT_ACCESS_TOKEN" \
-m "{
  'method': 'setOn',
  'params': {
    'state': boolean
  }
}"
```

##### Set state (edge response)

```
mosquitto_pub -t v1/devices/me/rpc/response/$request_id -u "$LIGHT_ACCESS_TOKEN" \
-m  "{'on': boolean }"
```











