package frc.robot.Subsystems;

import com.ctre.phoenix.motorcontrol.ControlMode;
import com.ctre.phoenix.motorcontrol.can.TalonFX;
import com.revrobotics.CANSparkMax;
import com.revrobotics.SparkMaxLimitSwitch;
import com.revrobotics.CANSparkMax.IdleMode;

import edu.wpi.first.wpilibj.PS4Controller;
import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;
import frc.robot.Robots.RobotMap;

public class Index {
    CANSparkMax index1;
    CANSparkMax index2;
    CANSparkMax intake;
    PS4Controller controller;
    TalonFX shooter;

    SparkMaxLimitSwitch sensor;
    SparkMaxLimitSwitch sensor2;

    public Index() {
        index1 = RobotMap.index1;
        controller = RobotMap.opController;
        index2 = RobotMap.index2;
        intake = RobotMap.intake;
        shooter = RobotMap.shooter;
        sensor = RobotMap.sensor;
        sensor2 = RobotMap.sensor2;
        index1.setInverted(true);
        index2.setInverted(false);
    }

    public void generalIndexControl(double pow) {
        index1.set(pow);
        index2.set(pow);
        intake.set(pow);
    }

    public void shooterControl(double pow) {
        shooter.set(ControlMode.PercentOutput, pow);
    }

    public void setNeutralMode(IdleMode nm) {
        index1.setIdleMode(nm);
        index2.setIdleMode(nm);
        intake.setIdleMode(nm);
    }

    public void runIndex() {
        if (!sensor.isPressed()) {
            if (!sensor2.isPressed()){
                index1.set(0);
                index2.set(0);
                intake.set(0);
            }
        }
        else if (!sensor2.isPressed()){
            index2.set(0);
            index1.set(0.80);
            intake.set(0.80);
        }
        else {
            generalIndexControl(.80);
        }
    }

    public void shootIndex(){
        shooter.set(ControlMode.PercentOutput, 0.85);
        while(shooter.getMotorOutputPercent() > .82 && controller.getCrossButton()){
            index1.set(.80);
            index2.set(.80);
        }
    }

    public void SmartDashboard(){
        SmartDashboard.putBoolean("Index 1 Sensor", sensor.isPressed());
        SmartDashboard.putBoolean("Index 2 Sensor", sensor2.isPressed());
    }

}
