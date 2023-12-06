<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class framework extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = ["name", "level", "year"];
    protected $visible = ['name', 'level', "year"];
    public function profiles(): BelongsToMany
    {
        return $this->belongsToMany(Profile::class);
    }
}
