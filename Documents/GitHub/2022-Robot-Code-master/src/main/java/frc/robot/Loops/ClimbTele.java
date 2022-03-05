package frc.robot.Loops;

import com.ctre.phoenix.ILoopable;
import com.ctre.phoenix.motorcontrol.NeutralMode;

import edu.wpi.first.wpilibj.PS4Controller;
import frc.robot.Robots.RobotMap;
import frc.robot.Robots.Subsystems;
import frc.robot.Subsystems.Climb;

public class ClimbTele implements ILoopable{

    Climb _operateClimb;
    PS4Controller _opcontroller;

    public ClimbTele(){
        _operateClimb = Subsystems.climb;
        _opcontroller = RobotMap.opController;
    }

    public void onStart(){
        _operateClimb.setNeutralMode(NeutralMode.Brake);
    }

    public void onLoop(){
        _operateClimb.ClimbMovement(_opcontroller.getLeftY() * .70);
        _operateClimb.ClimbAdjust(_opcontroller.getRightX() * .70);
    }

    public boolean isDone(){
        return false;
    }

    public void onStop(){
        _operateClimb.ClimbMovement(0);
        _operateClimb.ClimbAdjust(0);
    }

}