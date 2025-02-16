---
title: The making of MemoryOverflow
---

I had to make a game for a school project, so I made MemoryOverflow, a simple platformer game written in Godot for a school project.

## Idea

So I started by asking ChatGPT for some ideas. I got to about the 20th idea and just gave up and came up with my own idea. ChatGPT is just not good for coming up with ideas.

### The twist

A simple platformer isn't usually very interesting but I included a twist where you run out of memory and need to collect more.

## Development

I developed this in one of the best game engines ever created, [Godot](https://godotengine.org/). Godot is an open source game engine, meaning I can distribute my game however I like without any companies trying to make money off it _(Cough cough [unity](https://www.theverge.com/2023/9/12/23870547/unit-price-change-game-development))_. Godot uses the GDScript language which is just Python, but with some game engine specific stuff, and `func` instead of `def` for reaons I don't know.

<details>
<summary>
Player code
</summary>
Here is the code for the player for example

```gdscript
extends CharacterBody2D

@export var SPEED = 690
@export var JUMP_VELOCITY = -690

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")
var landing = false

func _physics_process(delta):
	# Add the gravity.
	if not is_on_floor():
		velocity.y += gravity * delta
		landing = true
	if is_on_floor():
		if landing:
			$Land.play()
			landing = false
	# Handle Jump.
	if Input.is_action_just_pressed("up") and is_on_floor():
		$Jump.play()
		velocity.y = JUMP_VELOCITY
	if Input.is_action_just_pressed("down") and not is_on_floor():
		$Down.play()
		velocity.y = -JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction = Input.get_axis("left", "right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)

	move_and_slide()
```

</details>

## Open source

Code is [here](https://github.com/Inglan/MemoryOverflow)
