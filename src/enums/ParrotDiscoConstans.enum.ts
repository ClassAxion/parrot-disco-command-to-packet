export enum ParrotDiscoConstans {
    ARNETWORKAL_MANAGER_DEFAULT_ID_MAX = 256,

    BD_NET_CD_NONACK_ID = 10,
    BD_NET_CD_ACK_ID = 11,
    BD_NET_CD_EMERGENCY_ID = 12,
    BD_NET_CD_VIDEO_ACK_ID = 13,
    BD_NET_DC_VIDEO_DATA_ID = 125,
    BD_NET_DC_EVENT_ID = 126,
    BD_NET_DC_NAVDATA_ID = 127,

    ARCOMMANDS_ID_PROJECT_COMMON = 0,
    ARCOMMANDS_ID_PROJECT_ARDRONE3 = 1,

    ARCOMMANDS_ID_ARDRONE3_CLASS_PILOTING = 0,
    ARCOMMANDS_ID_ARDRONE3_CLASS_ANIMATIONS = 5,
    ARCOMMANDS_ID_ARDRONE3_CLASS_CAMERA = 1,
    ARCOMMANDS_ID_ARDRONE3_CLASS_MEDIARECORD = 7,
    ARCOMMANDS_ID_ARDRONE3_CLASS_MEDIARECORDSTATE = 8,
    ARCOMMANDS_ID_ARDRONE3_CLASS_MEDIARECORDEVENT = 3,
    ARCOMMANDS_ID_ARDRONE3_CLASS_PILOTINGSTATE = 4,
    ARCOMMANDS_ID_ARDRONE3_CLASS_NETWORK = 13,
    ARCOMMANDS_ID_ARDRONE3_CLASS_NETWORKSTATE = 14,
    ARCOMMANDS_ID_ARDRONE3_CLASS_PILOTINGSETTINGS = 2,
    ARCOMMANDS_ID_ARDRONE3_CLASS_PILOTINGSETTINGSSTATE = 6,
    ARCOMMANDS_ID_ARDRONE3_CLASS_SPEEDSETTINGS = 11,
    ARCOMMANDS_ID_ARDRONE3_CLASS_SPEEDSETTINGSSTATE = 12,
    ARCOMMANDS_ID_ARDRONE3_CLASS_NETWORKSETTINGS = 9,
    ARCOMMANDS_ID_ARDRONE3_CLASS_NETWORKSETTINGSSTATE = 10,
    ARCOMMANDS_ID_ARDRONE3_CLASS_SETTINGS = 15,
    ARCOMMANDS_ID_ARDRONE3_CLASS_SETTINGSSTATE = 16,
    ARCOMMANDS_ID_ARDRONE3_CLASS_DIRECTORMODE = 17,
    ARCOMMANDS_ID_ARDRONE3_CLASS_DIRECTORMODESTATE = 18,
    ARCOMMANDS_ID_ARDRONE3_CLASS_PICTURESETTINGS = 19,
    ARCOMMANDS_ID_ARDRONE3_CLASS_PICTURESETTINGSSTATE = 20,
    ARCOMMANDS_ID_ARDRONE3_CLASS_MEDIASTREAMING = 21,
    ARCOMMANDS_ID_ARDRONE3_CLASS_MEDIASTREAMINGSTATE = 22,
    ARCOMMANDS_ID_ARDRONE3_CLASS_GPSSETTINGS = 23,
    ARCOMMANDS_ID_ARDRONE3_CLASS_GPSSETTINGSSTATE = 24,
    ARCOMMANDS_ID_ARDRONE3_CLASS_CAMERASTATE = 25,
    ARCOMMANDS_ID_ARDRONE3_CLASS_ANTIFLICKERING = 29,
    ARCOMMANDS_ID_ARDRONE3_CLASS_ANTIFLICKERINGSTATE = 30,

    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_FLATTRIMCHANGED = 0,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_FLYINGSTATECHANGED = 1,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_ALERTSTATECHANGED = 2,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_NAVIGATEHOMESTATECHANGED = 3,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_POSITIONCHANGED = 4,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_SPEEDCHANGED = 5,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_ATTITUDECHANGED = 6,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_AUTOTAKEOFFMODECHANGED = 7,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_ALTITUDECHANGED = 8,
    ARCOMMANDS_ID_ARDRONE3_PILOTINGSTATE_CMD_MAX = 9,

    ARCOMMANDS_ID_ARDRONE3_ANIMATIONS_CMD_FLIP = 0,
    ARCOMMANDS_ID_ARDRONE3_ANIMATIONS_CMD_MAX = 1,

    ARCOMMANDS_ARDRONE3_PILOTINGSTATE_FLYINGSTATECHANGED_STATE_LANDED = 0,
    ARCOMMANDS_ARDRONE3_PILOTINGSTATE_FLYINGSTATECHANGED_STATE_TAKINGOFF = 1,
    ARCOMMANDS_ARDRONE3_PILOTINGSTATE_FLYINGSTATECHANGED_STATE_HOVERING = 2,
    ARCOMMANDS_ARDRONE3_PILOTINGSTATE_FLYINGSTATECHANGED_STATE_FLYING = 3,
    ARCOMMANDS_ARDRONE3_PILOTINGSTATE_FLYINGSTATECHANGED_STATE_LANDING = 4,
    ARCOMMANDS_ARDRONE3_PILOTINGSTATE_FLYINGSTATECHANGED_STATE_EMERGENCY = 5,
    ARCOMMANDS_ARDRONE3_PILOTINGSTATE_FLYINGSTATECHANGED_STATE_MAX = 6,

    ARCOMMANDS_ARDRONE3_ANIMATIONS_FLIP_DIRECTION_FRONT = 0,
    ARCOMMANDS_ARDRONE3_ANIMATIONS_FLIP_DIRECTION_BACK = 1,
    ARCOMMANDS_ARDRONE3_ANIMATIONS_FLIP_DIRECTION_RIGHT = 2,
    ARCOMMANDS_ARDRONE3_ANIMATIONS_FLIP_DIRECTION_LEFT = 3,
    ARCOMMANDS_ARDRONE3_ANIMATIONS_FLIP_DIRECTION_MAX = 4,

    ARCOMMANDS_ID_COMMON_CLASS_NETWORK = 0,
    ARCOMMANDS_ID_COMMON_CLASS_NETWORKEVENT = 1,
    ARCOMMANDS_ID_COMMON_CLASS_SETTINGS = 2,
    ARCOMMANDS_ID_COMMON_CLASS_SETTINGSSTATE = 3,
    ARCOMMANDS_ID_COMMON_CLASS_COMMON = 4,
    ARCOMMANDS_ID_COMMON_CLASS_COMMONSTATE = 5,
    ARCOMMANDS_ID_COMMON_CLASS_OVERHEAT = 6,
    ARCOMMANDS_ID_COMMON_CLASS_OVERHEATSTATE = 7,
    ARCOMMANDS_ID_COMMON_CLASS_CONTROLLERSTATE = 8,
    ARCOMMANDS_ID_COMMON_CLASS_WIFISETTINGS = 9,
    ARCOMMANDS_ID_COMMON_CLASS_WIFISETTINGSSTATE = 10,
    ARCOMMANDS_ID_COMMON_CLASS_MAVLINK = 11,
    ARCOMMANDS_ID_COMMON_CLASS_MAVLINKSTATE = 12,
    ARCOMMANDS_ID_COMMON_CLASS_CALIBRATION = 13,
    ARCOMMANDS_ID_COMMON_CLASS_CALIBRATIONSTATE = 14,
    ARCOMMANDS_ID_COMMON_CLASS_CAMERASETTINGSSTATE = 15,
    ARCOMMANDS_ID_COMMON_CLASS_GPS = 16,
    ARCOMMANDS_ID_COMMON_CLASS_FLIGHTPLANSTATE = 17,
    ARCOMMANDS_ID_COMMON_CLASS_FLIGHTPLANEVENT = 19,
    ARCOMMANDS_ID_COMMON_CLASS_ARLIBSVERSIONSSTATE = 18,

    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_FLATTRIM = 0,
    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_TAKEOFF = 1,
    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_PCMD = 2,
    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_LANDING = 3,
    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_EMERGENCY = 4,
    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_NAVIGATEHOME = 5,
    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_AUTOTAKEOFFMODE = 6,
    ARCOMMANDS_ID_ARDRONE3_PILOTING_CMD_MAX = 7,

    ARCOMMANDS_ID_ARDRONE3_MEDIARECORD_CMD_PICTURE = 0,
    ARCOMMANDS_ID_ARDRONE3_MEDIARECORD_CMD_VIDEO = 1,
    ARCOMMANDS_ID_ARDRONE3_MEDIARECORD_CMD_PICTUREV2 = 2,
    ARCOMMANDS_ID_ARDRONE3_MEDIARECORD_CMD_VIDEOV2 = 3,
    ARCOMMANDS_ID_ARDRONE3_MEDIARECORD_CMD_MAX = 4,

    ARCOMMANDS_ARDRONE3_MEDIARECORD_VIDEO_RECORD_STOP = 0,
    ARCOMMANDS_ARDRONE3_MEDIARECORD_VIDEO_RECORD_START = 1,
    ARCOMMANDS_ARDRONE3_MEDIARECORD_VIDEO_RECORD_MAX = 2,

    ARCOMMANDS_ID_COMMON_COMMON_CMD_ALLSTATES = 0,
    ARCOMMANDS_ID_COMMON_COMMON_CMD_CURRENTDATE = 1,
    ARCOMMANDS_ID_COMMON_COMMON_CMD_CURRENTTIME = 2,
    ARCOMMANDS_ID_COMMON_COMMON_CMD_REBOOT = 3,
    ARCOMMANDS_ID_COMMON_COMMON_CMD_MAX = 4,

    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_ALLSTATESCHANGED = 0,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_BATTERYSTATECHANGED = 1,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGESTATELISTCHANGED = 2,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGEINFOSTATELISTCHANGED = 3,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_CURRENTDATECHANGED = 4,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_CURRENTTIMECHANGED = 5,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGEINFOREMAININGLISTCHANGED = 6,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_WIFISIGNALCHANGED = 6,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_SENSORSSTATESLISTCHANGED = 7,
    ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MAX = 8,

    CODEC_UNKNNOWN = 0,
    CODEC_VLIB = 1,
    CODEC_P264 = 2,
    CODEC_MPEG4_VISUAL = 3,
    CODEC_MPEG4_AVC = 4,
    CODEC_MOTION_JPEG = 5,

    ARMEDIA_ENCAPSULER_FRAME_TYPE_UNKNNOWN = 0,
    ARMEDIA_ENCAPSULER_FRAME_TYPE_I_FRAME = 1,
    ARMEDIA_ENCAPSULER_FRAME_TYPE_P_FRAME = 2,
    ARMEDIA_ENCAPSULER_FRAME_TYPE_JPEG = 3,
    ARMEDIA_ENCAPSULER_FRAME_TYPE_MAX = 4,

    ARNETWORK_MANAGER_INTERNAL_BUFFER_ID_PING = 0,
    ARNETWORK_MANAGER_INTERNAL_BUFFER_ID_PONG = 1,
    ARNETWORK_MANAGER_INTERNAL_BUFFER_ID_MAX = 3,

    ARNETWORKAL_FRAME_TYPE_UNINITIALIZED = 0,
    ARNETWORKAL_FRAME_TYPE_ACK = 1,
    ARNETWORKAL_FRAME_TYPE_DATA = 2,
    ARNETWORKAL_FRAME_TYPE_DATA_LOW_LATENCY = 3,
    ARNETWORKAL_FRAME_TYPE_DATA_WITH_ACK = 4,
    ARNETWORKAL_FRAME_TYPE_MAX = 5,
}
