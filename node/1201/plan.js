/*
* */
import React  from 'react';
import { sendCommand } from '../../../services/ebike/box';
import { TextField, SelectField, MenuItem, FlatButton, RaisedButton, IconButton } from 'material-ui';
sendCommand (command, param) {
        this.setState({ loading: true });
        const { boxId } = this.state;
        (async _ => {
            const info = await sendCommand(boxId, { command, param });
            this.setState({ info, loading: false });
        })().catch(error => this.setState({ info: null, loading: false }));
    }

    renderInfo () {
        const { info, loading } = this.state;
        if (loading) return <p>指令已发送，正在等待盒子反馈......</p>;
        if (!info) return <p>还未获取状态或获取失败</p>;
        if (isEmpty(info.acc)) {
            if (info.success) return (<p>指令执行成功</p>);
            else return (<p>指令执行失败</p>);
        }
        if (!info.isOnline) return (<p>设备不在线</p>);
        const { acc, lock, batteryLock, powerUnlink, time, location, deviceType, appVersion, extra, dataSource } = info;
        return (
            <div>
                <p>设备在线 {new Date(time).toSimpleString()}</p>
                <p>电门：{acc ? '开' : '关'} 设防：{lock ? '开' : '关'}
                    电池锁：{batteryLock ? '锁定' : '未锁'} {powerUnlink ? '断电' : '接电'}</p>
                <p>设备型号：{deviceType} 软件版本：{appVersion} 数据源：{['旧一动', '比德文', '一动展华', '小安保'][dataSource]}</p>
                <p>今日行驶里程：{extra.mileageOfDay}m 今日行驶时间：{extra.timeOfDay}min </p>
                <p>内置电池：{extra.battery}% GSM信号：{extra.signal} 电压：{extra.voltage}V</p>
                {location ? (
                    <div>
                        <p>速度：{location.speed}km/h 海拔：{location.alt}m 方向：{location.direction}°</p>
                        <p>定位类型：{['卫星', '基站'][location.type]} 位置：{location.address}</p>
                        <img
                            src={`https://apis.map.qq.com/ws/staticmap/v2/?key=Q6LBZ-GZZKS-MCNOK-6Q5ZY-MTBYZ-5XBOW&center=${location.lngLat[1]},${location.lngLat[0]}&size=400*300&zoom=17&scale=2&markers=color:blue|${location.lngLat[1]},${location.lngLat[0]}`}/>
                    </div>
                ) : <p>无卫星定位</p>}
            </div>
        );
    }

    renderContent () {

                            onChange={(e, value) => this.setState({ boxId: value })}
                        />
                    </div>
                </div>
                <RaisedButton label="获取状态" disabled={!boxId} onTouchTap={_ => this.sendCommand(6)}/>656
                <RaisedButton label="启动" disabled={!boxId} onTouchTap={_ => this.sendCommand(0)}/>
                <RaisedButton label="关闭" disabled={!boxId} onTouchTap={_ => this.sendCommand(4)}/>
                <RaisedButton label="设防" disabled={!boxId} onTouchTap={_ => this.sendCommand(1)}/>
                <RaisedButton label="撤防" disabled={!boxId} onTouchTap={_ => this.sendCommand(5)}/>
                <RaisedButton label="寻车" disabled={!boxId} onTouchTap={_ => this.sendCommand(2)}/>
                <RaisedButton label="打开电池仓" disabled={!boxId} onTouchTap={_ => this.sendCommand(10)}/>
                <RaisedButton label="设置/播放声音" disabled={!boxId} onTouchTap={_ => {
                    this.onOpenDialog('设置/播放声音', (
                        <div>
                            {Object.keys(this.BK_BOX_SOUND).map((key, index) => {
                                const idx = this.BK_BOX_SOUND[key];
                                return (
                                    <div
                                        key={index}
                                        className="search-row"
                                    >
                                        <span className="search-row-label" style={{ width: 180 }}>{key}</span>
                                        <SingleInput
                                            resetAfterDone={false}
                                            style={{ width: 400 }}
                                            name={key}
                                            defaultValue={`http://mangoebike.oss-cn-shenzhen.aliyuncs.com/amrs/${index}.amr`}
                                            onDone={value => {
                                                this.sendCommand(13, { idx, url: value });
                                            }}
                                        />
                                        <IconButton onTouchTap={_ => {
                                            this.sendCommand(9, { idx })
                                        }}><IconPlay/></IconButton>
                                    </div>
                                );
                            })}
                        </div>
                    ), [
                        <FlatButton label="关闭" onTouchTap={_ => this.onCloseDialog()}/>
                    ]);
                }}/>
                <RaisedButton label="关机" disabled={!boxId} onTouchTap={_ => this.sendCommand(7)}/>
                <RaisedButton label="重置" disabled={!boxId} onTouchTap={_ => this.sendCommand(8)}/>
                <RaisedButton label="转网" disabled={!boxId} onTouchTap={_ => {
                    this.onOpenDialog('填入网关地址', (
                        <div>
                            <span>自定义</span>
                            <SingleInput
                                name="server"
                                defaultValue="mangguo.xiaoantech.com:9880"
                                onDone={value => {
                                    this.sendCommand(11, { server: value });
                                    this.onCloseDialog();
                                }}
                            />
                            <RaisedButton
                                label="转到本地"
                                onTouchTap={_ => {
                                    this.sendCommand(11, { server: '112.74.132.53:9085' });
                                    this.onCloseDialog();
                                }}
                            />
                            <RaisedButton
                                label="转到远程"
                                onTouchTap={_ => {
                                    this.sendCommand(11, { server: '120.77.89.97:84' });
                                    this.onCloseDialog();
                                }}
                            />
                            <RaisedButton
                                label="转到新远程"
                                onTouchTap={_ => {
                                    this.sendCommand(11, { server: '120.25.135.178:4007' });
                                    this.onCloseDialog();
                                }}
                            />
                        </div>
                    ), [
                        <FlatButton label="放弃" onTouchTap={_ => this.onCloseDialog()}/>
                    ]);
                }}/>
                <RaisedButton label="远程升级" disabled={!boxId} onTouchTap={_ => this.sendCommand(12)}/>
                <RaisedButton
                    label="设置省电"
                    disabled={!boxId}
                    onTouchTap={_ => this.sendCommand(14, { mode: 1, freq_eco: 3600 })}
                />
                <RaisedButton
                    label="设置正常"
                    disabled={!boxId}
                    onTouchTap={_ => this.sendCommand(14, { mode: 0 })}
                />
                {this.renderInfo()}
            </div>
        );
    }
}